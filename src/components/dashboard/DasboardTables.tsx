import { useState } from "react";
import { Search, ChevronDown, Download } from "lucide-react";

// Mock Data for Tickets
const tickets = [
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "Regular",
    Status: "Going",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "Regular",
    Status: "Checked-in",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "VIP",
    Status: "Going",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "Regular",
    Status: "Going",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "Regular",
    Status: "Checked-in",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "Regular",
    Status: "Checked-in",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "Regular",
    Status: "Checked-in",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "Regular",
    Status: "Checked-in",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "VIP",
    Status: "Going",
  },
  {
    fullName: "Tolu Andula",
    email: "t.andula@gmail.com",
    phoneNumber: "+234901234567",
    ticketType: "Regular",
    Status: "Going",
  },
];

const orderData = {
  orderId: "x2d874chidcerco3",
  noOfTickets: 1,
  orderAmount: "₦7,500",
  dingFee: "₦325",
  buyerName: "Tolu Andula",
  buyerEmail: "t.andula@gmail.com",
  date: "12 March, 2025, 12:57 PM",
};

const orders = Array(10).fill(orderData);

const DashboardTables = () => {
  const [activeTab, setActiveTab] = useState("All Tickets");

  const getStatusStyles = (status: string) => {
    if (status === "Going") {
      return "bg-[#FFF6ED] text-[#C4320A]";
    } else if (status === "Checked-in") {
      return "bg-[#ECFDF3] text-[#027A48]";
    }
    return "bg-gray-100 text-gray-600";
  };

  // Tab Button Helper
  const TabButton = ({ name }: string) => (
    <button
      onClick={() => setActiveTab(name)}
      className={`pb-3 transition-colors ${
        activeTab === name
          ? "border-b-2 border-[#1884F6] font-medium text-[#1884F6]"
          : "text-[#6C7788] hover:text-[#1E1E1E]"
      }`}
    >
      {name}
    </button>
  );

  return (
    <div className="w-full min-w-[1440px] bg-white">
      <div className="max-w-screen-2xl mx-auto px-12 py-8 flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-8 border-b border-[#E9E9E9]">
            <TabButton name="All Tickets" />
            <TabButton name="Orders" />
            <TabButton name="Payouts" />
          </div>

          <div className="flex justify-between items-center">
            <div className="relative w-full max-w-[322px]">
              <input
                type="text"
                className="w-full h-10 text-[14px] placeholder:text-[#6C7788] rounded-lg border border-[#E9E9E9] pl-10 pr-4 font-regular outline-none focus:border-gray-400 transition-all"
                id="search"
                placeholder="Search"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6C7788]">
                <Search size={18} />
              </div>
            </div>

            <div className="flex items-center gap-3">
              {activeTab === "All Tickets" && (
                <>
                  <div className="relative">
                    <select className="appearance-none h-10 pl-4 pr-10 rounded-lg border border-[#E9E9E9] text-sm font-medium text-[#344054] bg-white outline-none focus:border-gray-400 cursor-pointer">
                      <option>Ticket Type: All</option>
                      <option>Regular</option>
                      <option>VIP</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6C7788] pointer-events-none"
                      size={16}
                    />
                  </div>

                  <div className="relative">
                    <select className="appearance-none h-10 pl-4 pr-10 rounded-lg border border-[#E9E9E9] text-sm font-medium text-[#344054] bg-white outline-none focus:border-gray-400 cursor-pointer">
                      <option>Status: All</option>
                      <option>Going</option>
                      <option>Checked-in</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6C7788] pointer-events-none"
                      size={16}
                    />
                  </div>
                </>
              )}

              <button className="flex items-center gap-2 h-10 px-4 rounded-lg border border-[#E9E9E9] text-sm font-medium text-[#344054] bg-white hover:bg-gray-50 transition-colors">
                <Download size={16} />
                Export Data (CSV)
              </button>
            </div>
          </div>
        </div>

        <div className="border border-[#E1E4EA] rounded-[16px] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#F9F9F9] border-b border-[#E1E4EA]">
              <tr>
                {activeTab === "All Tickets" ? (
                  <>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Full Name
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Email
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Phone Number
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Ticket Type
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Status
                    </th>
                  </>
                ) : activeTab === "Orders" ? (
                  <>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      No of Tickets
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Order Amount
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Ding Fee
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Buyer Name
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Buyer Email
                    </th>
                    <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                      Date
                    </th>
                  </>
                ) : (
                  <th className="p-4 text-xs font-medium text-[#6C7788] uppercase tracking-wider">
                    Payout Details
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#E1E4EA]">
              {activeTab === "All Tickets" &&
                tickets.map((el, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-sm font-medium text-[#1E1E1E]">
                      {el.fullName}
                    </td>
                    <td className="p-4 text-sm text-[#6C7788]">{el.email}</td>
                    <td className="p-4 text-sm text-[#6C7788]">
                      {el.phoneNumber}
                    </td>
                    <td className="p-4 text-sm text-[#6C7788]">
                      {el.ticketType}
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(
                          el.Status
                        )}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                            el.Status === "Going"
                              ? "bg-[#C4320A]"
                              : "bg-[#027A48]"
                          }`}
                        ></span>
                        {el.Status}
                      </span>
                    </td>
                  </tr>
                ))}

              {activeTab === "Orders" &&
                orders.map((el, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-sm font-medium text-[#1E1E1E]">
                      {el.orderId}
                    </td>
                    <td className="p-4 text-sm text-[#6C7788]">
                      {el.noOfTickets}
                    </td>
                    <td className="p-4 text-sm text-[#6C7788]">
                      {el.orderAmount}
                    </td>
                    <td className="p-4 text-sm text-[#6C7788]">{el.dingFee}</td>
                    <td className="p-4 text-sm text-[#6C7788]">
                      {el.buyerName}
                    </td>
                    <td className="p-4 text-sm text-[#6C7788]">
                      {el.buyerEmail}
                    </td>
                    <td className="p-4 text-sm text-[#6C7788]">{el.date}</td>
                  </tr>
                ))}

              {activeTab === "Payouts" && (
                <tr>
                  <td className="p-8 text-center text-gray-500" colSpan={7}>
                    No payout history available yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="flex items-center justify-between px-4 py-4 border-t border-[#E1E4EA] bg-white">
            <p className="text-sm text-[#6C7788]">
              Showing <span className="font-medium text-[#1E1E1E]">1-10</span>{" "}
              of <span className="font-medium text-[#1E1E1E]">93</span>
            </p>
            <div className="flex gap-3">
              <button className="px-3.5 py-2 border border-[#E9E9E9] rounded-lg text-sm font-medium text-[#344054] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button className="px-3.5 py-2 border border-[#E9E9E9] rounded-lg text-sm font-medium text-[#344054] hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTables;
