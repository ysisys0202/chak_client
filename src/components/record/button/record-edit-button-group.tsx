"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "chak-blocks/plain";
import { RecordData } from "@/util/validation/record";
import { handleConfirm } from "@/util/common";
import { useRecordFormContext } from "@/providers/record-form";
import { useUpdateRecordMutation } from "@/query/record";
import ButtonGroup from "@/components/record/button/button-group";

const RecordEditButtonGroup = ({ className }: { className?: string }) => {
  const router = useRouter();
  const { id } = useParams() as unknown as { id: number };
  const {
    formMethods: { handleSubmit },
  } = useRecordFormContext();
  const { mutate, isPending } = useUpdateRecordMutation();

  const handleSave = (data: RecordData) => mutate({ id, recordData: data });

  const handleBack = () => {
    handleConfirm(
      "아직 기록이 저장되지 않았습니다. 뒤로 돌아가시겠습니까?",
      () => {
        router.back();
      }
    );
  };

  return (
    <ButtonGroup className={className}>
      <Button
        theme="primary"
        onClick={handleSubmit(handleSave)}
        disabled={isPending}
      >
        저장하기
      </Button>
      <Button theme="dark" variant="outlined" onClick={handleBack}>
        뒤로가기
      </Button>
    </ButtonGroup>
  );
};

export default RecordEditButtonGroup;
