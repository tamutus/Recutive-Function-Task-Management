import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateOneRequiredWithoutTagFollowsNestedInputSchema } from './PersonUpdateOneRequiredWithoutTagFollowsNestedInputSchema';

export const PersonsToTagsUpdateWithoutTagInputSchema: z.ZodType<Prisma.PersonsToTagsUpdateWithoutTagInput> = z.object({
  follower: z.lazy(() => PersonUpdateOneRequiredWithoutTagFollowsNestedInputSchema).optional()
}).strict();

export default PersonsToTagsUpdateWithoutTagInputSchema;
