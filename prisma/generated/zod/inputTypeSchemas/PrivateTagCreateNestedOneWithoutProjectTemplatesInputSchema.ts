import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateWithoutProjectTemplatesInputSchema } from './PrivateTagCreateWithoutProjectTemplatesInputSchema';
import { PrivateTagUncheckedCreateWithoutProjectTemplatesInputSchema } from './PrivateTagUncheckedCreateWithoutProjectTemplatesInputSchema';
import { PrivateTagCreateOrConnectWithoutProjectTemplatesInputSchema } from './PrivateTagCreateOrConnectWithoutProjectTemplatesInputSchema';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';

export const PrivateTagCreateNestedOneWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.PrivateTagCreateNestedOneWithoutProjectTemplatesInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutProjectTemplatesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutProjectTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateTagCreateOrConnectWithoutProjectTemplatesInputSchema).optional(),
  connect: z.lazy(() => PrivateTagWhereUniqueInputSchema).optional()
}).strict();

export default PrivateTagCreateNestedOneWithoutProjectTemplatesInputSchema;
