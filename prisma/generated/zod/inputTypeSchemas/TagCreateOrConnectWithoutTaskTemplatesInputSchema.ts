import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutTaskTemplatesInputSchema } from './TagCreateWithoutTaskTemplatesInputSchema';
import { TagUncheckedCreateWithoutTaskTemplatesInputSchema } from './TagUncheckedCreateWithoutTaskTemplatesInputSchema';

export const TagCreateOrConnectWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutTaskTemplatesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutTaskTemplatesInputSchema),z.lazy(() => TagUncheckedCreateWithoutTaskTemplatesInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutTaskTemplatesInputSchema;
