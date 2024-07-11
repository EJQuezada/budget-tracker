"use client";

import { Category } from "@prisma/client";
import React, { ReactNode } from "react";

interface Props {
    trigger: ReactNode;
    category: Category;
}

function DeleteCategoryDialog() {
  return <div>DeleteCategoryDialog</div>;
}

export default DeleteCategoryDialog;
