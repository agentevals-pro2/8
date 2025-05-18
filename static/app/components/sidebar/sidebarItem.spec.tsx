import {isItemActive} from 'sentry/components/sidebar/sidebarItem';

describe('isItemActive', function () {
  it('is not active for settings performance path', function () {
    window.location.pathname = '/settings/projects/test-slug/performance/';

    expect(
      isItemActive({label: 'Performance', to: '/performance/'})
    ).toBe(false);
  });

  it('is active for performance path', function () {
    window.location.pathname = '/performance/';

    expect(
      isItemActive({label: 'Performance', to: '/performance/'})
    ).toBe(true);
  });
});
