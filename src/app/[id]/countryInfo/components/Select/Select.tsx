'use client'
import React from 'react';
import { Select } from 'antd';
import styles from "./Select.module.scss"
import type { SelectProps } from 'antd';

type LabelRender = SelectProps['labelRender'];

const options = [
    { label: 'rame', value: 'rame' },
    { label: 'rame', value: 'rame' },
    { label: 'rame', value: 'rame' },
    { label: 'rame', value: 'rame' },
];

const labelRender: LabelRender = (props) => {
    const { label, value } = props;

    if (label) {
        return value;
    }
    return <span>Company Profile</span>;
};

const AntSelect: React.FC = () => (
    <div className={styles.wrapper}>
        <Select labelRender={labelRender} defaultValue="1" style={{ width: '100%' }} options={options} />
    </div>
);

export default AntSelect;