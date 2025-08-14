"use client";

import { useAtomValue } from "jotai";

import { screenAtom } from "@/modules/widget/atoms/widget-atoms";
import { WidgetAuthScreen } from "@/modules/widget/ui/screens/widget-auth-screen";
import { WidgetChatScreen } from "@/modules/widget/ui/screens/widget-chat-screen";
import { WidgetErrorScreen } from "@/modules/widget/ui/screens/widget-error-screen";
import { WidgetInboxScreen } from "@/modules/widget/ui/screens/widget-inbox-screen";
import { WidgetLoadingScreen } from "@/modules/widget/ui/screens/widget-loading-screen";
import { WidgetSelectionScreen } from "@/modules/widget/ui/screens/widget-selection-screen";

interface Props {
  organizationId: string | null;
}

export const WidgetView = ({ organizationId }: Props) => {
  const screen = useAtomValue(screenAtom);

  const screenComponents = {
    auth: <WidgetAuthScreen />,
    chat: <WidgetChatScreen />,
    contact: <p>TODO: Contact</p>,
    error: <WidgetErrorScreen />,
    inbox: <WidgetInboxScreen />,
    loading: <WidgetLoadingScreen organizationId={organizationId} />,
    selection: <WidgetSelectionScreen />,
    voice: <p>TODO: Voice</p>,
  };

  return (
    <main className="flex flex-col min-h-screen min-w-screen h-full w-full overflow-hidden rounded-xl border bg-muted">
      {screenComponents[screen]}
    </main>
  );
};
