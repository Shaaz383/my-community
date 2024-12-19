import React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const CauseCard = ({ cause }) => {
  const progressPercentage = Math.min(
    cause.targetAmount > 0
      ? (cause.raisedAmount / cause.targetAmount) * 100
      : 0,
    100
  );

  return (
    <div className="bg-whiteColor rounded-lg shadow-md p-4 mb-6">
      <img
        src={cause.image}
        alt={cause.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold  mb-3 text-primaryGreen">
        {cause.name}
      </h2>
      <p className="text-sm  mb-4 text-gray-600">{cause.description}</p>

      <div className="mb-4">
        <Progress
          value={progressPercentage}
          max={100}
          className="rounded-full h-4 bg-gray-300"
          color="green"
        />
        <div className="text-center mt-2">
          <p className="text-sm font-semibold text-lightGreen">
            {`₹${cause.raisedAmount.toLocaleString()} raised of ₹${cause.targetAmount.toLocaleString()} goal`}
          </p>
        </div>
        <Button className="mt-4 bg-primaryGreen text-whiteColor">
          Donate now
        </Button>
      </div>

      <h3 className="text-md font-semibold mb-3 text-primaryGreen">
        Recent Donations
      </h3>
      <div className="bg-gray-50 rounded-lg p-3">
        {cause.donationHistory.length === 0 ? (
          <p className="text-sm text-gray-500">No donations yet.</p>
        ) : (
          cause.donationHistory.map((donation) => (
            <div
              key={donation.id}
              className="flex justify-between items-center border-b last:border-none py-2"
            >
              <div>
                <p className="text-sm font-medium text-secondary">
                  {donation.name}
                </p>
                <p className="text-xs text-primaryGreen">{donation.date}</p>
              </div>
              <p className="text-lightGreen font-semibold">{donation.amount}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CauseCard;
