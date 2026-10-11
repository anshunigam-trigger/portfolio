import { ArrowUpRight, Code2 } from "lucide-react";
import { problemSolving } from "../../constants/cleanSite";
import { isTodo } from "../../../data/projects";

export function ProblemSolvingSection() {
  if (isTodo(problemSolving.profileUrl) || isTodo(problemSolving.problemsSolved) || isTodo(problemSolving.contestRating)) return null;
  return <section id="problem-solving" className="section-pad problem-solving-section"><div className="container"><div className="problem-solving-card"><Code2 size={20} /><span>Problem solving</span><strong>{problemSolving.problemsSolved} problems</strong><small>Contest rating {problemSolving.contestRating}</small><a href={problemSolving.profileUrl} target="_blank" rel="noopener noreferrer">Open profile <ArrowUpRight size={14} /></a></div></div></section>;
}
