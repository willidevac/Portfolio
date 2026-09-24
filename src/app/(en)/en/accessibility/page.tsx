import { AccessibilityPage } from '@/components/pages/accessibility-page';
import { getPageMetadata } from '@/lib/localization';
export const metadata = getPageMetadata('en', 'accessibility');
export default function AccessibilityRoute() {
  return <AccessibilityPage locale="en" />;
}
