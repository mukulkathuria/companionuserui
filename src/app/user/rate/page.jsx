'use client';
import React, { useEffect, useState } from 'react';
import { getBookingDetailsforAll } from '@/services/user/bookings.service';
import { redirect } from 'next/navigation';
import RatingComponent from '@/components/RatingComponent';
import Loadingbar from '@/components/Loadingbar';

const page = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const bookingId = params.get('bookingId');
    if (!bookingId) {
      redirect('/');
    } else {
      getBookingDetailsforAll(bookingId).then(({ data: resdata }) => {
        if (resdata) {
          const values = {
            user: resdata.User?.filter((l) => !l.isCompanion)[0],
            companion: resdata.User?.filter((l) => l.isCompanion)[0]
          };
          setBookingDetails(values);
        } else {
          redirect('/user/chat');
        }
      });
    }
  }, []);

  if (!bookingDetails) return <div><Loadingbar/></div>;
  return <RatingComponent bookingDetails={bookingDetails.companion} />;
};

export default page;
