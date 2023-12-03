import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksWhereUniqueInputSchema } from './EnergiesToTaskWorksWhereUniqueInputSchema';
import { EnergiesToTaskWorksCreateWithoutWorkInputSchema } from './EnergiesToTaskWorksCreateWithoutWorkInputSchema';
import { EnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema } from './EnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema';

export const EnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksCreateOrConnectWithoutWorkInput> = z.object({
  where: z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToTaskWorksCreateWithoutWorkInputSchema),z.lazy(() => EnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema) ]),
}).strict();

export default EnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema;
