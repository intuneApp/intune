import PocketBase from 'pocketbase'
import {DEV_DB_URL} from '@/constants'
import Link from 'next/link';
async function getTalents(){
    const db = new PocketBase(DEV_DB_URL)
    const data = await db.records.getList('resume');
    return data?.items as any[]
    //remove cache
    

}

export default async function talentsPage(){
    const talents = await getTalents()
    return (
        <>
        {talents.map((talent) => <TalentCard key={talent.id} resume={talent} />)}
        </>
    )
}

const TalentCard = ({resume}:any) => {
    const {id,name,email,desired_role,desired_role_type} = resume || {}
    return (
        <Link href={`/talents/${id}`}>
            <div className="card">
                <h3>{name}</h3>
                <p>{email}</p>
                <p>{desired_role}</p>
                <p>{desired_role_type}</p>
            </div>
        </Link>
    )
    
}