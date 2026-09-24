import { AccessibilityPage } from '@/components/pages/accessibility-page';
import { getPageMetadata } from '@/lib/localization';
export const metadata = getPageMetadata('de', 'accessibility');
export default function AccessibilityRoute() {
  return <AccessibilityPage locale="de" />;
}
