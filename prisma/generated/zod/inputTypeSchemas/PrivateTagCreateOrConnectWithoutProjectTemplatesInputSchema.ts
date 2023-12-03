import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagCreateWithoutProjectTemplatesInputSchema } from './PrivateTagCreateWithoutProjectTemplatesInputSchema';
import { PrivateTagUncheckedCreateWithoutProjectTemplatesInputSchema } from './PrivateTagUncheckedCreateWithoutProjectTemplatesInputSchema';

export const PrivateTagCreateOrConnectWithoutProjectTemplatesInputSchema: z.ZodType<Prisma.PrivateTagCreateOrConnectWithoutProjectTemplatesInput> = z.object({
  where: z.lazy(() => PrivateTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutProjectTemplatesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutProjectTemplatesInputSchema) ]),
}).strict();

export default PrivateTagCreateOrConnectWithoutProjectTemplatesInputSchema;
