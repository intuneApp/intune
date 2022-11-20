'use client';

import { useState } from 'react';
import { AiOutlineEdit, AiOutlineMail } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import IconText from '@/components/atom/IconText';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import Title from '../atom/Title';

export const BasicInfoCard = ({ candidate }: any) => {
  const {
    phone,
    desired_location,
    first_name,
    last_name,
    email,
    desired_roles,
    desired_work_type,
    desired_start_date,
    desired_duration,
    accept_parttime,
    accept_unpaid,
    parttime_hours
  } = candidate || {};
  const [onEdit, setOnEdit] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const JobPreferenceDisplay = (
    <div className="w-[650px] mx-auto mt-10">
      <Title>Job Preference</Title>
      <div className="px-4">
        <h1 className="text-xl font-semibold">{desired_roles.join(', ')}</h1>

        <h1>Desired Location: {desired_location.join(', ')}</h1>
        <h1>
          Job Type: {desired_work_type} | Can start {desired_start_date} | {desired_duration}
        </h1>
        <h1 className="badge   badge-primary mr-2">
          {accept_parttime && 'Accept Part-time: ' + parttime_hours + 'hrs/week'}
        </h1>
        <h1 className="badge    badge-primary">{accept_unpaid && 'Accept Unpaid'}</h1>
      </div>
    </div>
  );

  const BaicInfoDisplay = (
    <>
      <div
        onMouseOver={() => setShowEdit(true)}
        onMouseLeave={() => setShowEdit(false)}
        className=" w-[650px] mx-auto mt-10 cursor-pointer">
        <div className="card flex flex-row place-content-between">
          <div className="flex flex-row">
            <div className="avatar">
              <div className="w-20 mr-6 rounded-full">
                <img src="https://sxsimg.xiaoyuanzhao.com/edu/default_image.png" />
              </div>
            </div>
            <div>
              <div className="flex flex-row ">
                <h1 className="text-2xl mb-4 mt-1">
                  {first_name} {last_name}
                </h1>
              </div>
              <div className="flex flex-row">
                <IconText icon={HiOutlineLocationMarker}>{desired_location[0]}</IconText>
                <div className="divider divider-horizontal p-1.5"></div>
                <IconText icon={AiOutlineMail}>{email}</IconText>
              </div>
            </div>
          </div>
          {showEdit && (
            <div className="mt-3" onClick={() => setOnEdit(true)}>
              <IconText icon={AiOutlineEdit} color={'DodgerBlue'}>
                Edit
              </IconText>
            </div>
          )}
        </div>
        <div className="divider divider-vertical p-1.5"></div>
      </div>
    </>
  );

  // a form that collect basic info of the candidate using ant design

  const formItemLayout = {
    wrapperCol: {
      xs: { span: 60 },
      sm: { span: 60 }
    },
    requireMark: 'optional'
  };

  const BasicInfoForm = (
    <div className="w-[650px] mx-auto mt-10 cursor-pointer">
      <Form {...formItemLayout} name="basicInfo">
        <Form.Item>
          <h1 className="text-2xl font-bold">Basic Info</h1>
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="first_name"
            style={{ display: 'inline-block', width: 'calc(50% - 12px)', marginRight: 24 }}
            rules={[{ required: true, message: 'Please input your first name!' }]}>
            <Input placeholder="First Name" />
          </Form.Item>

          <Form.Item
            name="last_name"
            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
            rules={[{ required: true, message: 'Please input your last name!' }]}>
            <Input placeholder="Last Name" />
          </Form.Item>
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
            name="email"
            style={{ display: 'inline-block', width: 'calc(50% - 12px)', marginRight: 24 }}
            rules={[{ required: true, type: 'email', message: 'Please input your valid email!' }]}>
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item name="phone" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
            <Input placeholder="Phone Number" />
          </Form.Item>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 30, offset: 21 }}>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );

  return onEdit ? BasicInfoForm : BaicInfoDisplay;
};
