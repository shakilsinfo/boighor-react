import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonHome = () => {

	return (
		<div>
			<section className="hero-area hero-slider-2">
	            <div className="container">
	                <div className="col-12 align-items-lg-center">
	                    <div className="row">
	                        <Skeleton height={350} width={'100%'} />
	                    </div>
	                </div>
	            </div>
	        </section>
	        <section className="mt--10">
				<div className="container">
					<div className="col-12">
						<div className="row">
							{Array(6)
					          .fill()
					          .map((item, index) => (
								<div className="col-2" key={index}>
									<div className="row">
										<Skeleton height={100} width={'100%'} />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{Array(2)
	          .fill()
	          .map((item1, index1) =>(
			<section className="section-margin mt-30 mb--50">
				<div className="container">
		          	<div className="col-12" key={index1}>
						<div className="row" align="center">
							<Skeleton height={20} width={'10%'} />
						</div>
					</div>
					<div className="col-12">
						<div className="row mt--20">
							{Array(6)
					          .fill()
					          .map((item2, index2) => (
								<div className="col-2" key={index2}>
									<div className="row">
										<Skeleton height={250} width={'95%'} />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section> 
			))}
		</div>
	)

}; export default SkeletonHome;