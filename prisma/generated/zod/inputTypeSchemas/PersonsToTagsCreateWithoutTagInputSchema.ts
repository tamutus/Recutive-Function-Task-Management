import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateNestedOneWithoutTagFollowsInputSchema } from './PersonCreateNestedOneWithoutTagFollowsInputSchema';

export const PersonsToTagsCreateWithoutTagInputSchema: z.ZodType<Prisma.PersonsToTagsCreateWithoutTagInput> = z.object({
  follower: z.lazy(() => PersonCreateNestedOneWithoutTagFollowsInputSchema)
}).strict();

export default PersonsToTagsCreateWithoutTagInputSchema;
