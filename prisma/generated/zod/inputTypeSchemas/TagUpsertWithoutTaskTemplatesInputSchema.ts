import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateWithoutTaskTemplatesInputSchema } from './TagUpdateWithoutTaskTemplatesInputSchema';
import { TagUncheckedUpdateWithoutTaskTemplatesInputSchema } from './TagUncheckedUpdateWithoutTaskTemplatesInputSchema';
import { TagCreateWithoutTaskTemplatesInputSchema } from './TagCreateWithoutTaskTemplatesInputSchema';
import { TagUncheckedCreateWithoutTaskTemplatesInputSchema } from './TagUncheckedCreateWithoutTaskTemplatesInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagUpsertWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.TagUpsertWithoutTaskTemplatesInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutTaskTemplatesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutTaskTemplatesInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutTaskTemplatesInputSchema),z.lazy(() => TagUncheckedCreateWithoutTaskTemplatesInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagUpsertWithoutTaskTemplatesInputSchema;
