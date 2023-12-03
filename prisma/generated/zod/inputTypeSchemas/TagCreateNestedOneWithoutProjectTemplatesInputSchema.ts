import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutProjectTemplatesInputSchema } from './TagCreateWithoutProjectTemplatesInputSchema';
import { TagUncheckedCreateWithoutProjectTemplatesInputSchema } from './TagUncheckedCreateWithoutProjectTemplatesInputSchema';
import { TagCreateOrConnectWithoutProjectTemplatesInputSchema } from './TagCreateOrConnectWithoutProjectTemplatesInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedOneWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutProjectTemplatesInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutProjectTemplatesInputSchema),z.lazy(() => TagUncheckedCreateWithoutProjectTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutProjectTemplatesInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export default TagCreateNestedOneWithoutProjectTemplatesInputSchema;
