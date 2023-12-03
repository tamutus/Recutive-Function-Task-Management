import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutFollowersInputSchema } from './TagUpdateWithoutFollowersInputSchema';
import { TagUncheckedUpdateWithoutFollowersInputSchema } from './TagUncheckedUpdateWithoutFollowersInputSchema';

export const TagUpdateToOneWithWhereWithoutFollowersInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutFollowersInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutFollowersInputSchema),z.lazy(() => TagUncheckedUpdateWithoutFollowersInputSchema) ]),
}).strict();

export default TagUpdateToOneWithWhereWithoutFollowersInputSchema;
