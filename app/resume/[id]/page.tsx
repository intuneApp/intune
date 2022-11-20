//profile page with dynamic routing, using the id parameter to fetch the data from pocketbase, and display it on the page, includes basic info, education, job preference, work experience, skills, and projects

import PocketBase from 'pocketbase';
import { DEV_DB_URL } from '@/constants';
import { ICandidate } from 'interface';
import { BasicInfoCard } from '@/components/resume/BasicInfo';
import { fake_student } from './data';
import { Divider } from 'antd';

const db = new PocketBase(DEV_DB_URL);
async function getCandidate(id: string) {
  const data = await db.records.getOne('candidate', id);

  return data;
  //remove cache
}

export default async function ResumePage({ params }: any) {
  const candidate = await getCandidate(params.id);
  return (
    <div className="bg-gray-50 py-10">
      <div className="divider divider-vertical "></div>
      <BasicInfoCard candidate={fake_student} />
      {/* <h1>{candidate.first_name} {candidate.last_name}</h1>
        <h2>{candidate.email}</h2>
        <h2>{candidate.desired_location}</h2>
        <h2>{candidate.desired_roles}</h2>
        <h2>{candidate.desired_work_type}</h2>
        <h2>{candidate.desired_start_date}</h2>
        <h2>{candidate.accept_parttime}</h2>
        <h2>{candidate.accept_unpaid}</h2>
        <h2>{candidate?.parttime_hours}</h2>
        <h2>{candidate.skills}</h2>
        <h2>{candidate.educationIDs}</h2> */}
    </div>
  );
}
// a form to edit basic info of the candidate
