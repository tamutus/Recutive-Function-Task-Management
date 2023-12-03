import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutProjectTemplatesInputSchema } from './TagCreateWithoutProjectTemplatesInputSchema';
import { TagUncheckedCreateWithoutProjectTemplatesInputSchema } from './TagUncheckedCreateWithoutProjectTemplatesInputSchema';

export const TagCreateOrConnectWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutProjectTemplatesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutProjectTemplatesInputSchema),z.lazy(() => TagUncheckedCreateWithoutProjectTemplatesInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutProjectTemplatesInputSchema;
