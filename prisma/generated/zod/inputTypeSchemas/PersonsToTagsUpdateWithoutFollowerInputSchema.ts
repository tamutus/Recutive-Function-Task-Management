import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateOneRequiredWithoutFollowersNestedInputSchema } from './TagUpdateOneRequiredWithoutFollowersNestedInputSchema';

export const PersonsToTagsUpdateWithoutFollowerInputSchema: z.ZodType<Prisma.PersonsToTagsUpdateWithoutFollowerInput> = z.object({
  tag: z.lazy(() => TagUpdateOneRequiredWithoutFollowersNestedInputSchema).optional()
}).strict();

export default PersonsToTagsUpdateWithoutFollowerInputSchema;
