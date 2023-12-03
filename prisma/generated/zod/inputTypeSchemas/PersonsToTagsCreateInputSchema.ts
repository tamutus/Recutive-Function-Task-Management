import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutTagFollowsInputSchema } from './PersonCreateNestedOneWithoutTagFollowsInputSchema';
import { TagCreateNestedOneWithoutFollowersInputSchema } from './TagCreateNestedOneWithoutFollowersInputSchema';

export const PersonsToTagsCreateInputSchema: z.ZodType<Prisma.PersonsToTagsCreateInput> = z.object({
  follower: z.lazy(() => PersonCreateNestedOneWithoutTagFollowsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutFollowersInputSchema)
}).strict();

export default PersonsToTagsCreateInputSchema;
