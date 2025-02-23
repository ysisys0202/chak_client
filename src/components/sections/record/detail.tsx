import Section from "@/components/sections/shared/section";
import SectionBody from "@/components/sections/shared/section-body";
import RecordDetailButtonGroup from "@/components/record-table/record-detail-button-group";
import { recordDetailSectionStyles } from "./style.css";
import RecordTableViewer from "@/components/record-table/record-table-viewer";

const RecordDetailSection = () => {
  return (
    <Section>
      <SectionBody>
        <RecordTableViewer />
        <RecordDetailButtonGroup
          className={recordDetailSectionStyles.buttonGroup}
        />
      </SectionBody>
    </Section>
  );
};

export default RecordDetailSection;
