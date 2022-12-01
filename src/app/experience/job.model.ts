export class Job {
  constructor(
    public role: string,
    public company: string,
    public startDate: Date,
    public endDate: Date,
    public current: boolean,
    public description: string,
    public technologies: string[]
  ) {}
}
