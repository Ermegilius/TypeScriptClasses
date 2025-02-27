import { ReactNode } from "react";

type HintBoxProps = {
	type: "hint";
	children: ReactNode;
};

type WarningBoxProps = {
	type: "warning";
	severity: "low" | "medium" | "high";
	children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function infoBox(props: InfoBoxProps) {
	const { children, type } = props;
	if (type === "hint") {
		return (
			<aside className="infoBox infoBox-hint">
				<p>{children}</p>
			</aside>
		);
	}

	const { severity } = props;

	return (
		<aside className={`infoBox infoBox-warning infoBox-warning-${severity}`}>
			<h2>Warning</h2>
			<p>{children}</p>
		</aside>
	);
}
