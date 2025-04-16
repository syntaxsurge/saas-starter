"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Loader2, PlusCircle } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { use, useActionState } from "react";
import { inviteTeamMember } from "@/app/(login)/actions";
import { useUser } from "@/lib/auth";

type ActionState = {
  error?: string;
  success?: string;
};

export function InviteTeamMember() {
  const { userPromise } = useUser();
  const user = use(userPromise);
  const isOwner = user?.role === "owner";
  const [inviteState, inviteAction, isInvitePending] = useActionState<
    ActionState,
    FormData
  >(inviteTeamMember, { error: "", success: "" });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Invite Team Member</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={inviteAction} className="space-y-5">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter team member's email"
              required
              disabled={!isOwner}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="role" className="text-sm font-medium">
              Role
            </Label>

            <RadioGroup
              defaultValue="member"
              name="role"
              disabled={!isOwner}
              className="flex space-x-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="member" id="member" />
                <Label htmlFor="member" className="cursor-pointer select-none">
                  Member
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="owner" id="owner" />
                <Label htmlFor="owner" className="cursor-pointer select-none">
                  Owner
                </Label>
              </div>
            </RadioGroup>
          </div>
          {inviteState?.error && (
            <p className="text-red-500 text-sm">{inviteState.error}</p>
          )}
          {inviteState?.success && (
            <p className="text-green-500 text-sm">{inviteState.success}</p>
          )}
          <Button type="submit" disabled={isInvitePending || !isOwner}>
            {isInvitePending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Inviting...
              </>
            ) : (
              <>
                <PlusCircle className="mr-2 h-4 w-4" />
                Invite Member
              </>
            )}
          </Button>
        </form>
      </CardContent>
      {!isOwner && (
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            You must be a team owner to invite new members.
          </p>
        </CardFooter>
      )}
    </Card>
  );
}