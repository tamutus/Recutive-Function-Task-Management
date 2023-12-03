import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagCreateWithoutProjectsInputSchema } from './PrivateTagCreateWithoutProjectsInputSchema';
import { PrivateTagUncheckedCreateWithoutProjectsInputSchema } from './PrivateTagUncheckedCreateWithoutProjectsInputSchema';

export const PrivateTagCreateOrConnectWithoutProjectsInputSchema: z.ZodType<Prisma.PrivateTagCreateOrConnectWithoutProjectsInput> = z.object({
  where: z.lazy(() => PrivateTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutProjectsInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutProjectsInputSchema) ]),
}).strict();

export default PrivateTagCreateOrConnectWithoutProjectsInputSchema;
