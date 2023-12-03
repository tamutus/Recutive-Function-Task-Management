import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutPathsInputSchema } from './TagUpdateWithoutPathsInputSchema';
import { TagUncheckedUpdateWithoutPathsInputSchema } from './TagUncheckedUpdateWithoutPathsInputSchema';

export const TagUpdateToOneWithWhereWithoutPathsInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutPathsInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutPathsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutPathsInputSchema) ]),
}).strict();

export default TagUpdateToOneWithWhereWithoutPathsInputSchema;
