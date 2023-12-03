import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema';
import { PrivateEnergiesToProjectTemplatesCreateWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesCreateWithoutProjectInputSchema';
import { PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema } from './PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema';

export const PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesCreateWithoutProjectInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default PrivateEnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema;
