import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateWithoutFollowersInputSchema } from './TagUpdateWithoutFollowersInputSchema';
import { TagUncheckedUpdateWithoutFollowersInputSchema } from './TagUncheckedUpdateWithoutFollowersInputSchema';
import { TagCreateWithoutFollowersInputSchema } from './TagCreateWithoutFollowersInputSchema';
import { TagUncheckedCreateWithoutFollowersInputSchema } from './TagUncheckedCreateWithoutFollowersInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagUpsertWithoutFollowersInputSchema: z.ZodType<Prisma.TagUpsertWithoutFollowersInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutFollowersInputSchema),z.lazy(() => TagUncheckedUpdateWithoutFollowersInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutFollowersInputSchema),z.lazy(() => TagUncheckedCreateWithoutFollowersInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagUpsertWithoutFollowersInputSchema;
