import React from "react";
import styles from "./../../Grids/Spaces.module.css";
import { Col, Row } from "@/Library/Common/Grids/Grids";
import Skeleton from "@/Library/Common/skeleton/skeleton";

const PageSkeleton = () => {
	return (
		<>
			<div className={styles.marginBottom16}>
				<Skeleton SkeletonType={"circle"} Height={100} />
			</div>

			<Row>
				<Col $md={8} className={styles.marginBottom16}>
					<Skeleton />
				</Col>

				<Col $md={9} className={styles.marginBottom16}>
					<Skeleton />
				</Col>

				<Col $md={8.5} className={styles.marginBottom16}>
					<Skeleton />
				</Col>
			</Row>
		</>
	);
};

export default PageSkeleton;
