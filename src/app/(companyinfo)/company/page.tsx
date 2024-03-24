import CompanyCatalog from "@/components/CompanyCatalog"
import { Suspense } from "react"
import LinearProgress from '@mui/material/LinearProgress';
import getAllCompany from "@/libs/getAllCompany";
import { getServerSession } from "next-auth"
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from "next/navigation";

export default function Company() {

    const allCompany = getAllCompany();

    // const session = await getServerSession(authOptions)
    // if(!session || !session.user.token) {
    //     alert("Please Login")
    //     redirect('/auth/login')
    // } 

    // const profile = await getUserProfile(session.user.token)

    return (
        <main className="text-left p-16">
            <div className="">
                <Suspense fallback={ <p>Loading ... <LinearProgress/></p> }>
                    <CompanyCatalog allCompanyJson={allCompany}/>
                </Suspense>
            </div>
        </main>
    )
}