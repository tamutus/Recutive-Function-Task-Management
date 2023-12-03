import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateOneRequiredWithoutTagFollowsNestedInputSchema } from './PersonUpdateOneRequiredWithoutTagFollowsNestedInputSchema';
import { TagUpdateOneRequiredWithoutFollowersNestedInputSchema } from './TagUpdateOneRequiredWithoutFollowersNestedInputSchema';

export const PersonsToTagsUpdateInputSchema: z.ZodType<Prisma.PersonsToTagsUpdateInput> = z.object({
  follower: z.lazy(() => PersonUpdateOneRequiredWithoutTagFollowsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutFollowersNestedInputSchema).optional()
}).strict();

export default PersonsToTagsUpdateInputSchema;
