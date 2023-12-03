import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutTaskTemplatesInputSchema } from './TagCreateWithoutTaskTemplatesInputSchema';
import { TagUncheckedCreateWithoutTaskTemplatesInputSchema } from './TagUncheckedCreateWithoutTaskTemplatesInputSchema';
import { TagCreateOrConnectWithoutTaskTemplatesInputSchema } from './TagCreateOrConnectWithoutTaskTemplatesInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedOneWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutTaskTemplatesInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutTaskTemplatesInputSchema),z.lazy(() => TagUncheckedCreateWithoutTaskTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutTaskTemplatesInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export default TagCreateNestedOneWithoutTaskTemplatesInputSchema;
