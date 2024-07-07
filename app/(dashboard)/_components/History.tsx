"use client";

import { UserSettings } from "@prisma/client";
import React, { useState } from "react";

function History({userSettings}:{userSettings: UserSettings }) {
  const [timeframe, setTimeFrame] = useState<Timeframe>("month");
  return <div>History</div>;
}

export default History;
