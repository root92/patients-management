import { PatientManagementPage } from './app.po';

describe('patient-management App', function() {
  let page: PatientManagementPage;

  beforeEach(() => {
    page = new PatientManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
