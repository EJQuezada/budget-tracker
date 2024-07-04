"use client";

import { GetCategoriesStatsResponseType } from "@/app/api/stats/categories/route";
import SkeletonWrapper from "@/components/SkeletonWrapper";
import { DateToUTCDate, GetFormatterForCurrency } from "@/lib/helpers";
import { TransactionType } from "@/lib/types";
import { UserSettings } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";


interface Props {
    userSettings: UserSettings;
    from: Date; 
    to: Date;
}
function CategoriesStats({userSettings, from, to}: Props) {
    const statsQuery = useQuery<GetCategoriesStatsResponseType>({
        queryKey: ["overview", "stats", "categories", from, to],
        queryFn: () => fetch(`/api/stats/categories?from=${DateToUTCDate (from)}&to=${DateToUTCDate(to)}`).then(res => res.json()),
    });

    const formatter = useMemo(() => {
        return GetFormatterForCurrency(userSettings.currency)
    }, [userSettings.currency]);

    return ( 
        <div className="flex w-full flex-wrap gap-2 md:flex-nowrap">
            <SkeletonWrapper isLoading={statsQuery.isFetching}>
                <CategoriesCard
                    formatter={formatter}
                    type="income"
                    data={statsQuery.data || []}
                />
            </SkeletonWrapper>
        </div>
    );
}

export default CategoriesStats;

function CategoriesCard({data, type, formatter}: {
    type: TransactionType;
    formatter: Intl.NumberFormat;
    data: GetCategoriesStatsResponseType;
}) {
    const filteredData = data.filter(el => el.type === type);
    const total = filteredData.reduce((acc, el) => acc + (el._sum?.amount || 0));
}