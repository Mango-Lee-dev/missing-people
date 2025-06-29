import { useEffect, useState } from "react";
import { Title } from "../components/report/common/title";

export const Analysis = () => {
  const [matchDna, setMatchDna] = useState<any>();
  const postMatchDna = async () => {
    try {
      const response = await fetch(`http://localhost:8000/match/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          SNP1: 0.5,
          SNP2: 0.6,
          SNP3: 0.7,
        }),
      });
      console.log(response);
      const data = await response.json();
      setMatchDna(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    postMatchDna();
  }, []);
  console.log(matchDna);
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Title title="분석 및 통계" />

      <div className="bg-white shadow-card rounded-lg p-6 mb-8">
        <div className="flex flex-col gap-4">
          {matchDna ? (
            <div>
              <p>실종자 번호: {matchDna.matched_case_id}</p>
              <p>일치 점수: {matchDna.match_score}</p>
              <p>일치 퍼센트: {matchDna.match_score * 100}%</p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
