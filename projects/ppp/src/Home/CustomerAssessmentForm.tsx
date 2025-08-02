// src/Home/CustomerAssessmentForm.tsx
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useState } from "react";
import { FormWrapper, SubmitButton, SelectField } from "./components/Forms";

type FormValues = {
  name: string;
  phone: string;
  projectType: string;
  budget: string;
  details: string;
};

const projectOptions = [
  { value: "web", label: "เว็บไซต์ขายของ / ร้านค้า" },
  { value: "landing", label: "หน้า Landing Page / โปรโมทสินค้า" },
  { value: "company", label: "เว็บไซต์บริษัท / โปรไฟล์องค์กร" },
  { value: "portfolio", label: "Portfolio / เรซูเม่ส่วนตัว" },
  { value: "other", label: "อื่น ๆ" },
];

const budgetOptions = [
  { value: "low", label: "ต่ำกว่า 10,000 บาท" },
  { value: "medium", label: "10,000 - 30,000 บาท" },
  { value: "high", label: "มากกว่า 30,000 บาท" },
];

export default function CustomerAssessmentForm() {
  const methods = useForm<FormValues>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = methods;

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const message = `
📝 แบบฟอร์มประเมินลูกค้า
━━━━━━━━━━━━━━
👤 ชื่อลูกค้า: ${data.name}
📞 เบอร์โทร: ${data.phone}
📌 ประเภทโปรเจกต์: ${projectOptions.find((p) => p.value === data.projectType)?.label}
💰 งบประมาณ: ${budgetOptions.find((b) => b.value === data.budget)?.label}
🖊 รายละเอียดเพิ่มเติม:
${data.details}
━━━━━━━━━━━━━━`;

    const encodedMessage = encodeURIComponent(message.trim());
    const lineURL = `https://line.me/R/msg/text/?${encodedMessage}`;

    // ล้างฟอร์มก่อนเปิดลิงก์
    reset();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // reset flag ภายใน 5 วิ

    window.open(lineURL, "_blank");
  };

  return (
    <FormWrapper
      title="ประเมินความต้องการของคุณ"
      description="ทีมเราจะใช้ข้อมูลนี้ในการเสนอแพ็กเกจที่เหมาะกับคุณที่สุด"
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* ชื่อ */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">ชื่อ-นามสกุล</span>
            </label>
            <input
              {...register("name", { required: "จำเป็นต้องกรอกชื่อ" })}
              className="input input-bordered w-full"
              placeholder="เช่น สมชาย ใจดี"
            />
            {errors.name && (
              <p className="text-error text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* เบอร์โทร */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">เบอร์โทร</span>
            </label>
            <input
              {...register("phone", {
                required: "จำเป็นต้องกรอกเบอร์โทร",
                pattern: {
                  value: /^[0-9]{9,10}$/,
                  message: "กรุณาใส่เบอร์โทรให้ถูกต้อง",
                },
              })}
              className="input input-bordered w-full"
              placeholder="เช่น 0912345678"
            />
            {errors.phone && (
              <p className="text-error text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* ประเภทโปรเจกต์ */}
          <SelectField<FormValues>
            name="projectType"
            label="ประเภทโปรเจกต์ที่ต้องการ"
            options={projectOptions}
            requiredMessage="กรุณาเลือกประเภทโปรเจกต์"
          />

          {/* งบประมาณ */}
          <SelectField<FormValues>
            name="budget"
            label="งบประมาณโดยประมาณ"
            options={budgetOptions}
            requiredMessage="กรุณาเลือกช่วงงบประมาณ"
          />

          {/* รายละเอียดเพิ่มเติม */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">
                รายละเอียดเพิ่มเติม
              </span>
            </label>
            <textarea
              {...register("details")}
              className="textarea textarea-bordered w-full min-h-[120px]"
              placeholder="เช่น ต้องการเว็บรองรับมือถือ มีระบบแชท ฯลฯ"
            />
          </div>

          {/* ปุ่ม Submit */}
          <SubmitButton isSubmitting={isSubmitting} isSubmitted={isSubmitted} />
        </form>
      </FormProvider>
    </FormWrapper>
  );
}
