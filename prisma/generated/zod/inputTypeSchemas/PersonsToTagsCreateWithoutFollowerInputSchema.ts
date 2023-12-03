import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateNestedOneWithoutFollowersInputSchema } from './TagCreateNestedOneWithoutFollowersInputSchema';

export const PersonsToTagsCreateWithoutFollowerInputSchema: z.ZodType<Prisma.PersonsToTagsCreateWithoutFollowerInput> = z.object({
  tag: z.lazy(() => TagCreateNestedOneWithoutFollowersInputSchema)
}).strict();

export default PersonsToTagsCreateWithoutFollowerInputSchema;
