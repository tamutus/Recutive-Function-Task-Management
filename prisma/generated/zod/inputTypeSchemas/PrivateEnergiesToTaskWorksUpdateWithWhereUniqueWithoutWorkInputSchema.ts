import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskWorksWhereUniqueInputSchema } from './PrivateEnergiesToTaskWorksWhereUniqueInputSchema';
import { PrivateEnergiesToTaskWorksUpdateWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksUpdateWithoutWorkInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedUpdateWithoutWorkInputSchema } from './PrivateEnergiesToTaskWorksUncheckedUpdateWithoutWorkInputSchema';

export const PrivateEnergiesToTaskWorksUpdateWithWhereUniqueWithoutWorkInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksUpdateWithWhereUniqueWithoutWorkInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTaskWorksWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToTaskWorksUpdateWithoutWorkInputSchema),z.lazy(() => PrivateEnergiesToTaskWorksUncheckedUpdateWithoutWorkInputSchema) ]),
}).strict();

export default PrivateEnergiesToTaskWorksUpdateWithWhereUniqueWithoutWorkInputSchema;
