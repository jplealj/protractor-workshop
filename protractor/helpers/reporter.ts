import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';

const { AwesomeReport } = require('jasmine-awesome-report');

const config = {
  fullPath: 'reports',
  fileName: 'awesome',
  merge: true,
};

export const reporter = () => {
  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.PRETTY,
      displayDuration: true,
    },
  }));
};
