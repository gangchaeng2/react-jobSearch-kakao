import axios from 'axios';
import fastXmlParser from 'fast-xml-parser';

export function getJobListBySaramin(query, page) {
    query = encodeURIComponent(query);
    return axios.get(`https://cryptic-headland-94862.herokuapp.com/http://api.saramin.co.kr/job-search?keywords=${query}&count=5&start=${page}`);
}

export function getJobListByIncuruit(query) {
    query = encodeURIComponent(query);
    return axios.get(`https://cors-anywhere.herokuapp.com/http://naeil.incruit.com/RSS?q=${query}&lo=&operTy=ANDOper`);
}

export function getJobList(query, site, page) {
    let jobList = [];
    switch(site) {
        case '사람인':
            jobList = getJobListBySaramin(query, page)
                      .then(function(res){
                          const jobJson = fastXmlParser.parse(res.data);
                          if(jobJson['job-search'].jobs.job.length > 0) {
                              const jobList = jobJson['job-search'].jobs.job;
                              let rtJobList = [];
                
                              jobList.forEach((job) => {
                                  const jobObj = {
                                      url: `http://www.saramin.co.kr/zf_user/jobs/relay/recruit-view?view_type=search&rec_idx=${job.id}&gz=1&t_ref=search&t_ref_content=generic&searchType=search`,
                                      company: job.company.name,
                                      detail: job.position
                                  }
                
                                  rtJobList = rtJobList.concat(jobObj);
                              });
                              return rtJobList;
                          } else {
                              return null;
                          }
                      })
                      .catch(function(error){
                          return null;
                      });
            break;
        case '인cruit':
            jobList = getJobListByIncuruit(query)
                      .then(function(res) {
                          const jobJson = fastXmlParser.parse(res.data);
                          const jobList = jobJson.rss.channel.item;

                          if(jobList.length > 0) {
                            let rtJobList = [];
              
                            jobList.forEach((job) => {
                                const jobObj = {
                                    url: job.link,
                                    company: job.company,
                                    detail: {
                                        title: job.title,
                                        location: '',
                                        'experience-level': '신입'
                                    }
                                }
              
                                rtJobList = rtJobList.concat(jobObj);
                            });
                            return rtJobList;
                        } else {
                            return null;
                        }
                      })
                      .catch(function(error) {
                          return null;  
                      })
            break;
        default:
          break;
      }

      return jobList;
}

export function ConvertSystemSourcetoHtml(str) {
    if(str !== undefined) {
        str = str.replace(/&lt;/g,"<");
        str = str.replace(/&gt;/g,">");
    } else {
        str = "";
    }

    return str;
}

export function leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();
  
    if (n.length < digits) {
      for (let i = 0; i < digits - n.length; i++)
        zero += '0';
    }
    return zero + n;
}