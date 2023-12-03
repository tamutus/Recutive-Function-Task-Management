import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateWithoutProjectsInputSchema } from './PrivateTagCreateWithoutProjectsInputSchema';
import { PrivateTagUncheckedCreateWithoutProjectsInputSchema } from './PrivateTagUncheckedCreateWithoutProjectsInputSchema';
import { PrivateTagCreateOrConnectWithoutProjectsInputSchema } from './PrivateTagCreateOrConnectWithoutProjectsInputSchema';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';

export const PrivateTagCreateNestedOneWithoutProjectsInputSchema: z.ZodType<Prisma.PrivateTagCreateNestedOneWithoutProjectsInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutProjectsInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateTagCreateOrConnectWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => PrivateTagWhereUniqueInputSchema).optional()
}).strict();

export default PrivateTagCreateNestedOneWithoutProjectsInputSchema;
