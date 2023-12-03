import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateWithoutPathsInputSchema } from './TagUpdateWithoutPathsInputSchema';
import { TagUncheckedUpdateWithoutPathsInputSchema } from './TagUncheckedUpdateWithoutPathsInputSchema';
import { TagCreateWithoutPathsInputSchema } from './TagCreateWithoutPathsInputSchema';
import { TagUncheckedCreateWithoutPathsInputSchema } from './TagUncheckedCreateWithoutPathsInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagUpsertWithoutPathsInputSchema: z.ZodType<Prisma.TagUpsertWithoutPathsInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutPathsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutPathsInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutPathsInputSchema),z.lazy(() => TagUncheckedCreateWithoutPathsInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagUpsertWithoutPathsInputSchema;
