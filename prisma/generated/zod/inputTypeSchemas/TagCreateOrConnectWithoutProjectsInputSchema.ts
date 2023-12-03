import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutProjectsInputSchema } from './TagCreateWithoutProjectsInputSchema';
import { TagUncheckedCreateWithoutProjectsInputSchema } from './TagUncheckedCreateWithoutProjectsInputSchema';

export const TagCreateOrConnectWithoutProjectsInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutProjectsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutProjectsInputSchema),z.lazy(() => TagUncheckedCreateWithoutProjectsInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutProjectsInputSchema;
