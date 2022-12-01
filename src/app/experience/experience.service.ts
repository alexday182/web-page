import { HttpClient } from '@angular/common/http';
import { Injectable, TestabilityRegistry } from '@angular/core';
import { reject } from 'lodash';
import { map } from 'rxjs/operators';
import { Job } from './job.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  items: Job[] = [];
  /*
    new Job(
      'Frontend Developer',
      'Freelance',
      new Date('2020-11'),
      new Date('2020'),
      true,
      `Working alongside a back-end developer. We bring solutions to SMEs. Creating smart, maintainable, and simple apps to help grow their business, following best practices and tools appropriate to their needs. Working with different technologies, such as Angular, AngularJS, SharePoint Online, Power Apps to name a few.`,
      [
        'Angular 9+',
        'SharePoint Online',
        'JavaScript',
        'TypeScript',
        'Bootstrap 4',
      ]
    ),
    new Job(
      'Assistant Manager and SharePoint Developer',
      'EY Argentina',
      new Date('2017-11'),
      new Date('2020-11'),
      false,
      `Working in a multidisciplinary team from all over the world and a variety of external and internal clients, I develop new features and maintenance applications in AngularJS and Angular based on SharePoint Online and 2013 as a backend. In my last year I was promoted to assistant manager and that role came with the responsibility for the SharePoint team in Argentina.`,
      [
        'Angular 6',
        'SharePoint Online',
        'JavaScript',
        'TypeScript',
        'Bootstrap 3',
        'Angularjs',
        'BPC Forms',
        'Kendo',
        'Power Apps',
      ]
    ),
    new Job(
      'Software Developer',
      'Iceberg Solutions',
      new Date('2016-11'),
      new Date('2017-10'),
      false,
      `Working in a team of 4 developers, we oversaw one of iceberg's biggest clients, IDB. Development of new SharePoint user-friendly interfaces with JavaScript AngularJS, Bootstrap, jQuery, HTML, CSS.
      `,
      [
        'SharePoint  2010',
        'SharePoint Designer',
        'JavaScript',
        'Bootstrap 3',
        'SharePoint 2013',
        'Angularjs',
        'jQuery',
      ]
    ),
    new Job(
      'SharePoint Developer',
      'Atos Argentina',
      new Date('2016-05'),
      new Date('2016-11'),
      false,
      `Working for one of Atos client Total Austral. I was in the maintenance area. I had directly contact with clients, trying to understand their needs and fulfil them based on SharePoint 2010 environment using JavaScript.`,
      [
        'SharePoint  2010',
        'SharePoint Designer',
        'JavaScript',
        'SharePoint Workflows',
        'jQuery',
      ]
    ),
    new Job(
      'SharePoint Analyst and Developer',
      'BASSC Chevron',
      new Date('2013-07'),
      new Date('2015-05'),
      false,
      `Working in a multidisciplinary team from all over the world and a variety of internal clients we bring SharePoint out of the box solutions and customs with JavaScript and Bootstrap.
      
      `,
      [
        'SharePoint  2010',
        'SharePoint Designer',
        'JavaScript',
        'Bootstrap 3',
        'SharePoint 2013',
        'ASP.NET',
        'InfoPath',
        'jQuery',
      ]
    ),

    new Job(
      'SharePoint Developer',
      'Baufest',
      new Date('2010-11'),
      new Date('2013-05'),
      false,
      `Working for one of Atos client Total Austral. I was in the maintenance area. I had directly contact with clients, trying to understand their needs and fulfil them based on SharePoint 2010 environment using JavaScript.`,
      [
        'SharePoint  2007',
        'SharePoint  2010',
        'SharePoint Designer',
        'JavaScript',
        'SharePoint Workflows',
        'Nitex',
        'C#',
        'HTML',
        'CSS',
      ]
    ),
    new Job(
      'Junior Developer',
      'Accenture',
      new Date('2010-02'),
      new Date('2010-10'),
      false,
      `Working in a multidisciplinary team from all over the world and a variety of internal clients I was in the SharePoint Support Team`,
      ['SharePoint  2007', 'SharePoint Designer']
    ),
  ];*/
  constructor(private http: HttpClient) {}

  getJobs() {
    return this.http.get<Job[]>(
      'https://me-app-58a4e-default-rtdb.firebaseio.com/jobs/-NI3vcP2Q3-Ks_haxLqe.json'
    );
  }
}
