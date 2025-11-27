import { X } from "lucide-react";
import { motion } from "framer-motion";
import React, { type ReactNode } from "react";
import { useForm } from "react-hook-form";

interface SidebarProps {
  activeTab: string;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ activeTab, setShowSidebar }: SidebarProps) => {
  const mockData = [
    {
      firstName: "Tolu",
      lastName: "Andula",
      email: "t.andula@gmail.com",
      phoneNumber: "+234901234567",
      ticketType: "Regular",
      Status: "Going",
      checkedIn: "12 March, 2025, 12:57 PM",
    },
  ];

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const { register, handleSubmit } = useForm<{ amount: string }>();

  const onSubmit = (data: { amount: string }) => {
    // placeholder submit behaviour - you can wire this to API
    console.log("Request payout", data);
    setShowSidebar(false);
  };

  // Static available balance for now (could be passed via props)
  const availableBalance = "₦449,150";

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/50 z-50 flex justify-end h-screen"
      // Close on backdrop click
      onClick={closeSidebar}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
        className="h-screen w-[510px] bg-white flex flex-col shadow-2xl"
      >
        <div className="p-6 border-b border-[#E0E0E0] flex items-center justify-between shrink-0 bg-white">
          <h1 className="text-[20px] font-semibold text-[#1E1E1E] leading-7">
            {activeTab === "All Tickets" ? "Tickets Details" : "Request Payout"}
          </h1>

          <button
            onClick={closeSidebar}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-[#6C7788] hover:text-[#1E1E1E]"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === "All Tickets" ? (
            mockData.map((el, i) => (
              <div key={i} className="flex flex-col gap-6">
                <DetailRow label="First Name" value={el.firstName} />
                <DetailRow label="Last Name" value={el.lastName} />
                <DetailRow label="Email" value={el.email} />
                <DetailRow label="Phone Number" value={el.phoneNumber} />
                <DetailRow label="Ticket Type" value={el.ticketType} />

                <div className="w-full flex items-center justify-between">
                  <h3 className="text-[14px] font-medium leading-5 text-[#A0A7B4]">
                    Status
                  </h3>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      el.Status === "Going"
                        ? "bg-[#FFF6ED] text-[#C4320A]"
                        : "bg-[#ECFDF3] text-[#027A48]"
                    }`}
                  >
                    {el.Status}
                  </span>
                </div>

                <DetailRow label="Checked-in on" value={el.checkedIn} />

                <button className="text-[#1884F6] cursor-pointer font-medium text-[14px] mt-4 text-left hover:underline">
                  View Order Information
                </button>
              </div>
            ))
          ) : (
            // Payouts form
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <label className="text-sm font-medium text-[#344054]">
                Amount <span className="text-red-500">*</span>
              </label>

              <input
                {...register("amount", { required: true })}
                type="text"
                placeholder="Enter amount"
                className="w-full h-10 rounded-lg border border-[#E9E9E9] pl-4 pr-4 outline-none focus:border-gray-400"
              />

              <div className="text-sm text-[#6C7788]">
                Available balance:{" "}
                <span className="font-medium text-[#1E1E1E]">
                  {availableBalance}
                </span>
              </div>

              <div className="bg-[#EFEFEF] p-4 rounded-xl mt-4">
                <p className="text-[14px] font-medium text-[#000000] mb-3">
                  Your money will be paid out to
                </p>
                <div className="flex justify-between">
                  <p className="text-[13px] text-[#A0A7B4]">Bank name</p>
                  <p className="text-[13px] text-[#000000]">First Bank</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] text-[#A0A7B4]">Account number</p>
                  <p className="text-[13px] text-[#000000]">009012345</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[13px] text-[#A0A7B4]">Account name</p>
                  <p className="text-[13px] text-[#000000]">
                    TedX Bowen University
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </motion.main>
  );
};

interface DetailRowProps {
  label: string;
  value?: ReactNode;
}

const DetailRow = ({ label, value }: DetailRowProps) => (
  <div className="w-full flex items-center justify-between pb-3 last:border-0">
    <h3 className="text-[14px] font-medium leading-5 text-[#A0A7B4]">
      {label}
    </h3>
    <p className="text-[14px] font-medium leading-5 text-[#1E1E1E]">{value}</p>
  </div>
);

export default Sidebar;
